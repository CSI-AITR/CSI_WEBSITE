import toast from "react-hot-toast";
import { apiConnector } from "../apiConnector";
import { authEndPoints } from "../apis";

const { LOGIN, LOGOUT } = authEndPoints;

export const loginAdmin = async (data, navigate) => {
    const toastId = toast.loading("Logging in...");
    try {
        const response = await apiConnector("POST", LOGIN, data, {
            withCredentials: true,
        });

        if (!response?.data?.success) {
            throw new Error(response?.data?.message || "Login failed");
        }

        const token = response?.data?.data?.accessToken;
        localStorage.setItem("adminToken", token);

        toast.success("Welcome, Admin!");
        navigate("/admin");
    } catch (error) {
        const msg = error?.response?.data?.message || "Invalid credentials";
        toast.error(msg);
        console.log("Admin login error:", error);
    } finally {
        toast.dismiss(toastId);
    }
};

export const logoutAdmin = async (navigate) => {
    const token = localStorage.getItem("adminToken");
    try {
        await apiConnector("POST", LOGOUT, null, {
            Authorization: `Bearer ${token}`,
            withCredentials: true,
        });
    } catch (error) {
        console.log("Logout error:", error);
    } finally {
        localStorage.removeItem("adminToken");
        toast.success("Logged out successfully");
        navigate("/login");
    }
};
