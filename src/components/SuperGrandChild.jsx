import UltraSuperGrandChild from "./UltraSuperGrandChild";

const SuperGrandChild = ({ gift, setGift }) => {
  return (
    <div>
      <div className="w-40 h-40 bg-green-300">SuperGrandChild : {gift}</div>
      <UltraSuperGrandChild />
    </div>
  );
};

export default SuperGrandChild;
