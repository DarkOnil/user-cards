import { Card, Avatar, Tag, Typography } from 'antd'
import './UserCard.css'

const UserCard = (props) => {
    const user = props.user

    return (
        <Card className="user-card" hoverable>
            <div className="user-card__top">
                <Avatar size={72} src={user.img} alt={user.name} />

                {user.active === true && (
                    <Tag color="green">Онлайн</Tag>
                )}

                {user.active === false && (
                    <Tag color="default">Не в сети</Tag>
                )}
            </div>

            <Typography.Title level={4}>
                {user.name}
            </Typography.Title>

            <p>Возраст: {user.age}</p>
            <p>Город: {user.city}</p>
        </Card>
    )
}

export default UserCard
