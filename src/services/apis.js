const BASE_URL=process.env.REACT_APP_BASE_URL;

export const eventEndPoints={
    ACTIVE_EVENTS:BASE_URL+"/event/active",
    PAST_EVENTS:BASE_URL+"/event/pastEvents",   
}

export const contactUsEndPoints={
    SEND_CONFIRMATION_MAIL:BASE_URL+"/contact/response",   
}

export const authEndPoints={
    LOGIN:BASE_URL+"/auth/login",
    LOGOUT:BASE_URL+"/auth/logout",
}