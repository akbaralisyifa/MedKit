import AtomButtonAction from '../Atom/AtomButtonAction';

import { FaTrash, FaEdit, FaInfoCircle } from 'react-icons/fa';

const OrganismButtonAction = () => {
  return (
    <>
      <AtomButtonAction icon={<FaInfoCircle color="white" />} text="Detail" style="bg-green-600 hover:bg-green-700" />
      <AtomButtonAction icon={<FaEdit color="white" />} text="Edit" style="bg-blue-600 hover:bg-blue-700" />
      <AtomButtonAction icon={<FaTrash color="white" />} text="Delete" style="bg-red-600 hover:bg-red-700" />
    </>
  );
};

export default OrganismButtonAction;
