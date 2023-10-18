import lab from '../../assets/hero_Image/lab.jpg';
import OrganismHomeFeatures from './Organism/OrganismHomeFeatures';
import obatAll from '../../assets/hero_Image/obatAll.jpg';

const HomeFeature = () => {
  const article = ['Obat Berkualitas, Aman untuk Keluarga Anda', 'Dapatkan obat berkualitas tinggi dari sumber terpercaya dan aman untuk penggunaan sehari-hari oleh seluruh anggota keluarga Anda'];

  const article2 = ['Jelajahi Koleksi Produk Eksklusif Kami', 'Telusuri berbagai produk obat eksklusif yang kami tawarkan untuk meningkatkan kualitas hidup Anda dan seluruh keluarga.'];

  return (
    <>
      <OrganismHomeFeatures judul={article[0]} lab={lab} text={article[1]} justify="justify-end" />
      <OrganismHomeFeatures lab={obatAll} judul={article2[0]} text={article2[1]} order="lg:order-2" justify="justify-start" />
    </>
  );
};

export default HomeFeature;
