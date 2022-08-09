import { createContext, useState } from "react";

export const NotificationContext = createContext();

const NotificationContextProvider = (props) => {
    const [notificationStatus, setNotificationStatus] = useState({ isNotified: false, message: null });

    const toggleNotificationStatus = (isNotified, message) => {
        setNotificationStatus({ isNotified, message });
    };

    return (
        <NotificationContext.Provider value={{ notificationStatus, toggleNotificationStatus }}>
            {props.children}
        </NotificationContext.Provider>
    );
};

export default NotificationContextProvider;
