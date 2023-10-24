const OrganismThead = () => {
  const style = 'font-firaSans text-xl font-semibold text-center py-5 text-black';
  return (
    <tr>
      <td className={style}>#</td>
      <td className={style}>Products</td>
      <td className={style}>Price</td>
      <td className={style}>Quantity</td>
      <td className={style}>Action</td>
    </tr>
  );
};

export default OrganismThead;
