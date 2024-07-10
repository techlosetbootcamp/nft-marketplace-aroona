import loader from "../../assets/images/spinner.gif";

export default function Loader() {
  return (
    <div className="flex items-center justify-center h-screen">
      <img src={loader} alt="Loading" />
    </div>
  );
}
