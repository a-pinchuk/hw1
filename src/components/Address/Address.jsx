import PropTypes from 'prop-types';
import { AddressTitle, AddressDescription } from './Address.styled';

export const Address = ({ street, suite, city }) => {
  return (
    <>
      <AddressTitle>Address:</AddressTitle>
      <AddressDescription>City: {city}</AddressDescription>
      <AddressDescription>Street: {street}</AddressDescription>
      <AddressDescription>Suite: {suite}</AddressDescription>
    </>
  );
};

Address.propTypes = {
  street: PropTypes.string.isRequired,
  suite: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};
