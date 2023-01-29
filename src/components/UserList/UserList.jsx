import { User } from '../User/User';
import PropTypes from 'prop-types';

export const UserList = ({ users }) => {
  return (
    <ul>
      {users.map(el => {
        return (
          <li key={el.id}>
            <User user={el} />
          </li>
        );
      })}
    </ul>
  );
};

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
