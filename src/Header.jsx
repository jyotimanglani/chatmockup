import Logo from "./assets/chatbotLogo.avif";

const Header = () => {
  return (
    <div className="flex justify-between p-2">
      <img src={Logo} alt="chatbot image" className="h-15 w-20"/>
      <h1 className="text-xl font-semibold mt-4">User</h1>
    </div>
  );
};

export default Header;
