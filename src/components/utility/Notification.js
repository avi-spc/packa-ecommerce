import { useContext, useEffect } from "react";

import { NotificationContext } from "../../contexts/notificationContext";

const Notification = () => {
    const { notificationStatus, toggleNotificationStatus } = useContext(NotificationContext);

    useEffect(() => {
        if (notificationStatus.isNotified) {
            setTimeout(() => {
                document.querySelector(".notification").classList.remove("hidden");
            }, 0);

            setTimeout(() => {
                document.querySelector(".notification").classList.add("hidden");
                toggleNotificationStatus(false, null);
            }, 1500);
        }
    }, [notificationStatus.isNotified]);

    return (
        <div>
            <div className="notification hidden">{notificationStatus.message}</div>
        </div>
    );
};

export default Notification;
