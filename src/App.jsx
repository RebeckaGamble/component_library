import { useEffect, useState } from "react";
import "./App.css";
import Alert from "./components/Alert";
import Badge from "./components/Badge";
import Button from "./components/Button";
import Card from "./components/Card";
import sthlm from "./assets/stockholm.jpg";
import liverpool from "./assets/liverpool.jpg";
import toronto from "./assets/toronto.jpg";
import Alert2 from "./components/Alert2";
import { FaEnvelope, FaHeart, FaInfo } from "react-icons/fa";
import { variants } from "./styles/variants";
import { Modal, ModalBody, ModalFooter, ModalHeader } from "./components/Modal";
import { HiCheck, HiClock } from "react-icons/hi";
import Navbar from "./components/Navbar";

function App() {
  const [toggleAlert, setToggleAlert] = useState(false);
  const [timedAlert, setTimedAlert] = useState(false);
  const [openAllAlerts, setOpenAllAlerts] = useState(variants.map(() => false));
  const [openModal, setOpenModal] = useState(false);

  const triggerAlert = () => {
    setToggleAlert(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setTimedAlert(true);
    }, 3000);
  }, []);

  const toggleAllAlerts = () => {
    setOpenAllAlerts(openAllAlerts.map(() => true));
  };

  const closeAlert = (index) => {
    setOpenAllAlerts((prevOpenAlerts) => {
      const updatedAlerts = [...prevOpenAlerts];
      updatedAlerts[index] = false;
      return updatedAlerts;
    });
  };

  /*Modal */
  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      {/*Navbar */}
      <Navbar />
      {/*Page content */}
      <div className="flex flex-col py-4 bg-slate-100 top-16 relative">
        {/*Buttons */}
        <div className="section" id="sectionBtn">
          <h1 className="title">Buttons</h1>
          <div className="flex flex-wrap gap-4 justify-start mx-auto">
            <Button
              onClick={toggleAllAlerts}
              label={"Default"}
              color={"default"}
              size={"default"}
            />
            <Button
              onClick={handleOpenModal}
              label={"Green btn"}
              variant={"secondary"}
              color={"green"}
              size={"large"}
            />
            <Button
              onClick={triggerAlert}
              label={"Button danger"}
              variant={"primary"}
              color={"danger"}
              size={"small"}
            />
            <Button label={"Disabled"} size={"small"} disabled />
          </div>
        </div>

        {/*Alerts*/}
        <div className="section" id="sectionAlert">
          <h1 className="title">Alert</h1>
          {/*with variants */}
          <button
            onClick={toggleAllAlerts}
            className="border border-black m-2 rounded-md bg- py-1 px-4 font-semibold max-w-fit mx-auto"
          >
            Open Variants Alerts
          </button>
          <div>
            {variants.map((variant, index) => (
              <Alert2
                key={index}
                variant={variant}
                open={openAllAlerts[index]}
                onClose={() => closeAlert(index)}
              />
            ))}
          </div>
          {/*with timer */}
          <Alert
            color={"bg-[#E5F6FD] border-[#1AB1F5]"}
            trigger={timedAlert}
            setTrigger={setTimedAlert}
          >
            <FaInfo className="border-[0.3px] rounded-full p-0.5 text-[#1AB1F5] border-[#1AB1F5] bg-white" />
            <h3 className="text-sm font-semibold py-1 px-5">My timed alert</h3>
            <p className="text-[12px] px-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            </p>
            <button
              className="border-[#1AB1F5] border px-2 shadow-sm tracking-widest rounded-sm text-sm mt-2 font-semibold text-[#1AB1F5] bg-white hover:bg-[#1AB1F5] hover:text-white"
              onClick={() => setTimedAlert(false)}
            >
              Close
            </button>
          </Alert>
          {/*alert */}
          <button
            type="button"
            onClick={triggerAlert}
            className="border font-semibold border-black m-2 rounded py-1 px-4 max-w-fit mx-auto"
          >
            Open Alert
          </button>
          <Alert
            color={"bg-[#FFF4E5] border-[#FFA117]"}
            trigger={toggleAlert}
            setTrigger={setToggleAlert}
          >
            <FaHeart className="absolute w-4 h-6 top-2 left-2 font-semibold text-[#FFA117]" />
            <br />
            <h3 className="font-semibold mb-1">Lorem</h3>
            <p className="text-sm px-5 sm:max-w-[320px] md:max-w-[420px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
              dicta.
            </p>
            <button
              className="border-[#FFA117] border px-2 shadow-sm rounded-sm text-md mt-2 tracking-widest font-medium text-[#FFA117] bg-white hover:bg-[#FFA117] hover:font-semibold hover:text-white"
              onClick={() => setToggleAlert(false)}
            >
              Close
            </button>
          </Alert>
        </div>

        {/*Badge */}
        <div className="section" id="sectionBadge">
          <h1 className="title">Badge</h1>
          <Badge
            icon={<HiClock color="purple" size={"40"} />}
            color="red"
            content={"4min"}
          />
          <Badge
            icon={<HiCheck color="green"size={"30"} />}
            color="lightBlue"
            content={"Done"}
          />
          <Badge
            icon={<FaEnvelope color="gray" size={"40"} />}
            color="red"
            content={"4"}
          />
        </div>

        {/*Card */}
        <div className="section" id="sectionCard">
          <h1 className="title">Cards</h1>

          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <Card
                imgSrc={sthlm}
                imgAlt={"Image of Stockholm"}
                title={"Stockholm"}
                text={
                  " Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium obcaecati, culpa adipisci sequi exercitationem id nihil officia nam quibusdam."
                }
                link={"/Stockholm"}
                linkTitle={"Read more"}
              />
              <Card
                imgSrc={liverpool}
                imgAlt={"Image of Liverpool"}
                title={"Liverpool"}
                text={
                  "Minus a, inventore enim soluta possimus corrupti repellendus rerum maiores fugiat. Amet ut porro blanditiis quisquam illum enim magnam tenetur, quasi qui at quibusdam placeat molestiae explicabo quis unde beatae reiciendis."
                }
                link={"/"}
                linkTitle={"Read more"}
              />
              <Card
                imgSrc={toronto}
                imgAlt={"Image of Toronto"}
                title={"Toronto"}
                text={"In Toronto testingaveryverylongword to se if it breaks"}
                link={"/"}
                linkTitle={"Read more"}
              />
            </div>
          </div>
        </div>

        {/*Modal */}
        <div className="section" id="sectionModal">
          <h1 className="title">Modal</h1>
          <button className="" onClick={handleOpenModal}>
            Open Modal
          </button>

          <Modal show={openModal} onClose={handleCloseModal} size="large">
            <ModalHeader>
              <h3 className="font-semibold text-center">My Modal</h3>
            </ModalHeader>
            <ModalBody>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                veritatis magni at, recusandae commodi necessitatibus maxime vel
                quisquam error earum!
              </p>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={handleCloseModal}
                className="border border-slate-700 font-semibold text-sm px-4 py-0.5 rounded-sm shadow-md"
              >
                Close
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default App;
