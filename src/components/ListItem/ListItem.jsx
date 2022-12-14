import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { MdClose } from 'react-icons/md';
import PropTypes from 'prop-types';
import { ListItemText, Button, Text } from './ListItem.styled';

export default function ListItem({ contact }) {
  const dispatch = useDispatch();

  const { id, name, phone } = contact;

  const handleDelete = () => dispatch(deleteContact(id));

  return (
    <ListItemText>
      <Text>
        {name}: {phone}
      </Text>
      <Button type="button" onClick={handleDelete}>
        <MdClose size={24} />
      </Button>
    </ListItemText>
  );
}

ListItem.propTypes = {
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
};
