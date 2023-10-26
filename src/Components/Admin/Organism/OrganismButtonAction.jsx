import AtomButtonAction from '../Atom/AtomButtonAction';

import { FaTrash, FaEdit, FaInfoCircle } from 'react-icons/fa';
import ModalEdit from '../ModalEdit';
import ModalDetail from '../ModalDetail';

const OrganismButtonAction = ({ handleDelete, data }) => {
  return (
    <>
      <ModalDetail data={data}>
        <AtomButtonAction icon={<FaInfoCircle color="white" />} text="Detail" style="bg-green-600 hover:bg-green-700" />
      </ModalDetail>
      <ModalEdit data={data}>
        <AtomButtonAction icon={<FaEdit color="white" />} text="Edit" style="bg-blue-600 hover:bg-blue-700" />
      </ModalEdit>
      <AtomButtonAction icon={<FaTrash color="white" />} action={handleDelete} text="Delete" style="bg-red-600 hover:bg-red-700" />
    </>
  );
};

export default OrganismButtonAction;
