import PropTypes from 'prop-types';
import { Paragraph, Span } from '../User/User.styled';
import { Address } from '../Address/Address';
import Avatar from 'react-avatar';

export const User = ({
  user: {
    name,
    email,
    isOnline,
    address: { street, suite, city },
  },
}) => {
  const emailCheck = email.endsWith('biz');
  return (
    <>
      <Avatar size="40" round={true} name={name} />
      <Paragraph>
        Name: <Span>{name}</Span>
      </Paragraph>
      <Paragraph>
        Email: <Span isRed={emailCheck}>{email}</Span>
      </Paragraph>
      <Paragraph>
        Is Online: <Span online={isOnline}>{isOnline}</Span>
      </Paragraph>
      <Address street={street} suite={suite} city={city} />
    </>
  );
};

User.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
    address: PropTypes.shape.isRequired,
  }).isRequired,
};
