import React, { useState } from 'react';
import { apiConnector } from '../../services/apiConnector';

const BASE_URL = process.env.REACT_APP_BASE_URL;

const getAuthHeader = () => ({
    Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
});

const TABS = [
    { id: 'create', label: 'Create' },
    { id: 'edit',   label: 'Edit'   },
    { id: 'delete', label: 'Delete' },
    { id: 'toggle', label: 'Toggle' },
];

/* ─── Reusable Input ──────────────────────────────────── */
const InputField = ({ label, type = "text", name, placeholder, value, onChange, required, accept }) => (
    <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
            {label}{required && <span className="text-red-custom-400 ml-0.5">*</span>}
        </label>
        {type === "file" ? (
            <input
                type="file" accept={accept} onChange={onChange}
                className="w-full rounded-lg px-3 py-2 text-sm text-slate-300 cursor-pointer outline-none focus:border-blue-std-500 focus:ring-1 focus:ring-blue-std-500 transition-colors duration-200"
                style={{ background: '#142040', border: '1px solid #1e2d4a' }}
            />
        ) : (
            <input
                type={type} name={name} placeholder={placeholder}
                value={value} onChange={onChange} required={required}
                className="w-full rounded-lg px-3.5 py-2.5 text-sm text-slate-200 outline-none placeholder-slate-600 focus:border-blue-std-500 focus:ring-1 focus:ring-blue-std-500 transition-colors duration-200"
                style={{ background: '#142040', border: '1px solid #1e2d4a' }}
            />
        )}
    </div>
);

/* ─── Textarea ─────────────────────────────────────────── */
const TextareaField = ({ label, name, placeholder, value, onChange, required, rows = 3 }) => (
    <div>
        <label className="block text-xs font-semibold uppercase tracking-wider text-gray-500 mb-1.5">
            {label}{required && <span className="text-red-custom-400 ml-0.5">*</span>}
        </label>
        <textarea
            name={name} placeholder={placeholder} value={value}
            onChange={onChange} required={required} rows={rows}
            className="w-full rounded-lg px-3.5 py-2.5 text-sm text-slate-200 outline-none placeholder-slate-600 resize-y focus:border-blue-std-500 focus:ring-1 focus:ring-blue-std-500 transition-colors duration-200"
            style={{ background: '#142040', border: '1px solid #1e2d4a', fontFamily: 'inherit' }}
        />
    </div>
);

/* ─── Submit Button ────────────────────────────────────── */
const SubmitBtn = ({ loading, children }) => (
    <button
        type="submit" disabled={loading}
        className="w-full py-2.5 rounded-lg bg-blue-std-600 hover:bg-blue-std-700 text-white font-semibold text-sm transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed mt-1"
    >
        {children}
    </button>
);

/* ─── EventForm ────────────────────────────────────────── */
const EventForm = () => {
    const [activeTab, setActiveTab] = useState('create');
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState({ text: '', type: '' });

    const [createData, setCreateData] = useState({ eventName: '', eventDate: '', eventTime: '', eventVenue: '', eventDescription: '', registrationLink: '' });
    const [thumbnail, setThumbnail] = useState(null);
    const [poster, setPoster] = useState(null);

    const [editEventId, setEditEventId] = useState('');
    const [editData, setEditData] = useState({ eventName: '', eventDate: '', eventTime: '', eventVenue: '', eventDescription: '', registrationLink: '' });
    const [editThumbnail, setEditThumbnail] = useState(null);
    const [editPoster, setEditPoster] = useState(null);

    const [deleteEventId, setDeleteEventId] = useState('');
    const [toggleEventId, setToggleEventId] = useState('');

    const showMessage = (text, type = 'success') => {
        setMessage({ text, type });
        setTimeout(() => setMessage({ text: '', type: '' }), 4000);
    };

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!thumbnail || !poster) { showMessage('Thumbnail and Poster are required', 'error'); return; }
        setLoading(true);
        try {
            const fd = new FormData();
            Object.entries(createData).forEach(([k, v]) => fd.append(k, v));
            fd.append('thumbnail', thumbnail); fd.append('poster', poster);
            const res = await apiConnector('POST', `${BASE_URL}/event/createEvent`, fd, getAuthHeader());
            if (!res?.data?.success) throw new Error();
            showMessage('Event created successfully!');
            setCreateData({ eventName: '', eventDate: '', eventTime: '', eventVenue: '', eventDescription: '', registrationLink: '' });
            setThumbnail(null); setPoster(null);
        } catch (err) { showMessage(err?.response?.data?.message || 'Error creating event', 'error'); }
        setLoading(false);
    };

    const handleEdit = async (e) => {
        e.preventDefault();
        if (!editEventId.trim()) { showMessage('Event ID is required', 'error'); return; }
        setLoading(true);
        try {
            const fd = new FormData();
            Object.entries(editData).forEach(([k, v]) => { if (v) fd.append(k, v); });
            if (editThumbnail) fd.append('thumbnail', editThumbnail);
            if (editPoster) fd.append('poster', editPoster);
            const res = await apiConnector('PATCH', `${BASE_URL}/event/edit/${editEventId}`, fd, getAuthHeader());
            if (!res?.data?.success) throw new Error();
            showMessage('Event updated successfully!');
        } catch (err) { showMessage(err?.response?.data?.message || 'Error updating event', 'error'); }
        setLoading(false);
    };

    const handleDelete = async (e) => {
        e.preventDefault();
        if (!deleteEventId.trim()) { showMessage('Event ID is required', 'error'); return; }
        setLoading(true);
        try {
            const res = await apiConnector('DELETE', `${BASE_URL}/event/delete/${deleteEventId}`, null, getAuthHeader());
            if (!res?.data?.success) throw new Error();
            showMessage('Event deleted successfully!');
            setDeleteEventId('');
        } catch (err) { showMessage(err?.response?.data?.message || 'Error deleting event', 'error'); }
        setLoading(false);
    };

    const handleToggle = async (e) => {
        e.preventDefault();
        if (!toggleEventId.trim()) { showMessage('Event ID is required', 'error'); return; }
        setLoading(true);
        try {
            const res = await apiConnector('PATCH', `${BASE_URL}/event/toggleActiveStatus/${toggleEventId}`, null, getAuthHeader());
            if (!res?.data?.success) throw new Error();
            showMessage('Event status toggled!');
        } catch (err) { showMessage(err?.response?.data?.message || 'Error toggling status', 'error'); }
        setLoading(false);
    };

    return (
        <div className="flex flex-col gap-4">

            {/* Tabs */}
            <div className="flex gap-1 rounded-lg p-1" style={{ background: '#0c1730' }}>
                {TABS.map(tab => (
                    <button
                        key={tab.id}
                        onClick={() => { setActiveTab(tab.id); setMessage({ text: '', type: '' }); }}
                        className={`flex-1 py-2 text-sm font-semibold rounded-md transition-colors duration-200 ${
                            activeTab === tab.id
                                ? 'bg-gray-700 text-white'
                                : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Message */}
            {message.text && (
                <div className={`px-4 py-2.5 rounded-lg text-sm font-medium ${
                    message.type === 'error'
                        ? 'bg-red-custom-500/10 border border-red-custom-500/30 text-red-custom-400'
                        : 'bg-green-custom-400/10 border border-green-custom-400/30 text-green-custom-400'
                }`}>
                    {message.text}
                </div>
            )}

            {/* CREATE */}
            {activeTab === 'create' && (
                <form onSubmit={handleCreate} className="flex flex-col gap-3">
                    <InputField label="Event Name" name="eventName" placeholder="e.g. Hackathon 2025" value={createData.eventName} onChange={e => setCreateData({ ...createData, eventName: e.target.value })} required />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InputField label="Date" type="date" name="eventDate" value={createData.eventDate} onChange={e => setCreateData({ ...createData, eventDate: e.target.value })} required />
                        <InputField label="Time" type="time" name="eventTime" value={createData.eventTime} onChange={e => setCreateData({ ...createData, eventTime: e.target.value })} required />
                    </div>
                    <InputField label="Venue" name="eventVenue" placeholder="e.g. Seminar Hall A" value={createData.eventVenue} onChange={e => setCreateData({ ...createData, eventVenue: e.target.value })} required />
                    <InputField label="Registration Link" type="url" name="registrationLink" placeholder="https://..." value={createData.registrationLink} onChange={e => setCreateData({ ...createData, registrationLink: e.target.value })} required />
                    <TextareaField label="Description" name="eventDescription" placeholder="Describe the event..." value={createData.eventDescription} onChange={e => setCreateData({ ...createData, eventDescription: e.target.value })} required />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InputField label="Thumbnail *" type="file" accept="image/*" onChange={e => setThumbnail(e.target.files[0])} />
                        <InputField label="Poster *" type="file" accept="image/*" onChange={e => setPoster(e.target.files[0])} />
                    </div>
                    <SubmitBtn loading={loading}>{loading ? 'Creating...' : 'Create Event'}</SubmitBtn>
                </form>
            )}

            {/* EDIT */}
            {activeTab === 'edit' && (
                <form onSubmit={handleEdit} className="flex flex-col gap-3">
                    <InputField label="Event ID *" name="editEventId" placeholder="MongoDB _id of the event" value={editEventId} onChange={e => setEditEventId(e.target.value)} required />
                    <p className="text-xs text-gray-500">Leave fields blank to keep existing values.</p>
                    <InputField label="Event Name" name="eventName" placeholder="New name" value={editData.eventName} onChange={e => setEditData({ ...editData, eventName: e.target.value })} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InputField label="Date" type="date" name="eventDate" value={editData.eventDate} onChange={e => setEditData({ ...editData, eventDate: e.target.value })} />
                        <InputField label="Time" type="time" name="eventTime" value={editData.eventTime} onChange={e => setEditData({ ...editData, eventTime: e.target.value })} />
                    </div>
                    <InputField label="Venue" name="eventVenue" placeholder="New venue" value={editData.eventVenue} onChange={e => setEditData({ ...editData, eventVenue: e.target.value })} />
                    <InputField label="Registration Link" type="url" name="registrationLink" placeholder="https://..." value={editData.registrationLink} onChange={e => setEditData({ ...editData, registrationLink: e.target.value })} />
                    <TextareaField label="Description" name="eventDescription" placeholder="Updated description..." value={editData.eventDescription} onChange={e => setEditData({ ...editData, eventDescription: e.target.value })} />
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        <InputField label="New Thumbnail" type="file" accept="image/*" onChange={e => setEditThumbnail(e.target.files[0])} />
                        <InputField label="New Poster" type="file" accept="image/*" onChange={e => setEditPoster(e.target.files[0])} />
                    </div>
                    <SubmitBtn loading={loading}>{loading ? 'Updating...' : 'Update Event'}</SubmitBtn>
                </form>
            )}

            {/* DELETE */}
            {activeTab === 'delete' && (
                <form onSubmit={handleDelete} className="flex flex-col gap-3">
                    <div className="px-4 py-3 rounded-lg bg-red-custom-500/10 border border-red-custom-500/30 text-red-custom-400 text-sm">
                        ⚠️ This is irreversible. The event and its images will be permanently deleted.
                    </div>
                    <InputField label="Event ID *" name="deleteEventId" placeholder="MongoDB _id of the event to delete" value={deleteEventId} onChange={e => setDeleteEventId(e.target.value)} required />
                    <button
                        type="submit" disabled={loading}
                        className="w-full py-2.5 rounded-lg bg-red-custom-500/20 hover:bg-red-custom-500/30 text-red-custom-400 border border-red-custom-500/40 font-semibold text-sm transition-colors duration-200 disabled:opacity-50 mt-1"
                    >
                        {loading ? 'Deleting...' : 'Delete Event'}
                    </button>
                </form>
            )}

            {/* TOGGLE */}
            {activeTab === 'toggle' && (
                <form onSubmit={handleToggle} className="flex flex-col gap-3">
                    <div className="px-4 py-3 rounded-lg bg-amber-500/10 border border-amber-500/30 text-amber-300 text-sm">
                        Toggles between Active (Upcoming) and Inactive (Past) status.
                    </div>
                    <InputField label="Event ID *" name="toggleEventId" placeholder="MongoDB _id of the event" value={toggleEventId} onChange={e => setToggleEventId(e.target.value)} required />
                    <button
                        type="submit" disabled={loading}
                        className="w-full py-2.5 rounded-lg bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 font-semibold text-sm transition-colors duration-200 disabled:opacity-50 mt-1"
                    >
                        {loading ? 'Toggling...' : 'Toggle Active Status'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default EventForm;
