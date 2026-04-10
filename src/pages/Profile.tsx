import { useTelegram } from '../hooks/useTelegram';
import { GameIcon } from '../components/icons';
import { CircularAvatar } from '../components/CircularAvatar';
import './Profile.css';

export function Profile() {
  const { user } = useTelegram();
  const level = 1;
  const balance = 0;
  const xpProgress = 0;

  const avatarUrl = user?.photo_url || '';
  const displayName = user?.first_name || 'Пользователь';

  return (
    <div className="profile">
      <div className="profile__card">
        <div className="profile__header">
          <div className="profile__user-info">
            <div className="profile__avatar-wrapper">
              <CircularAvatar
                src={avatarUrl || undefined}
                alt={displayName}
                progress={xpProgress}
              />
              <span className="profile__level">Ур. {level}</span>
            </div>
            <div className="profile__details">
              <span className="profile__name">{displayName}</span>
              <div className="profile__balance">
                <span className="profile__balance-value">{balance}</span>
                <span className="profile__balance-icon">
                  <GameIcon />
                </span>
              </div>
            </div>
          </div>
          <button className="profile__settings" aria-label="Настройки">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
              <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32a.488.488 0 0 0-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.07.62-.07.94s.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6A3.6 3.6 0 1 1 12 8.4a3.6 3.6 0 0 1 0 7.2z" />
            </svg>
          </button>
        </div>
        <button className="profile__deposit">Пополнить баланс</button>
      </div>
    </div>
  );
}
