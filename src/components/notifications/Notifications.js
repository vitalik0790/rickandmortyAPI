import s from './Notifications.module.css'

const Notifications = ({ message }) => {
    return (
        <div className={s.container}>
            <p className={s.text}>{message}</p>
        </div>
    );
}

export default Notifications;