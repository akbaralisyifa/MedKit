import AtomButtonAction from '../Atom/AtomButtonAction';

import { FaTrash, FaEdit, FaInfoCircle } from 'react-icons/fa';
import ModalEdit from '../ModalEdit';

const OrganismButtonAction = ({ handleUpdate, data }) => {
  return (
    <>
      <AtomButtonAction icon={<FaInfoCircle color="white" />} text="Detail" style="bg-green-600 hover:bg-green-700" />
      <ModalEdit data={data}>
        <AtomButtonAction icon={<FaEdit color="white" />} action={handleUpdate} text="Edit" style="bg-blue-600 hover:bg-blue-700" />
      </ModalEdit>
      <AtomButtonAction icon={<FaTrash color="white" />} text="Delete" style="bg-red-600 hover:bg-red-700" />
    </>
  );
};

export default OrganismButtonAction;
