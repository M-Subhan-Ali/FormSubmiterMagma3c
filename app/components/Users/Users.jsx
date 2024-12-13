import { createContext, useContext, useState } from "react";
import PersonalForm from "../PersonalForm/PersonalForm";
import Certificaions from "../Certifications/Certifications";
import Experience from "../Experience/Experience";
import { formsContent } from "../Categories/Categories";
import { useRouter } from "next/navigation";

export const CurrentStepUsers = createContext();

const Users = () => {
  const { next, setNext } = useContext(formsContent);
  const [staffData, setStaffData] = useState([]);
  const [currentStaff, setCurrentStaff] = useState(1);
  const [applicationCount, setApplicationCount] = useState(1);
  const [currentStepUser, setCurrentStepUser] = useState(1);
  const [showAddAnother, setShowAddAnother] = useState(false); 
  const router = useRouter();

  const steps = (() => {
    switch (next) {
      case "Sole Proprietorship":
        return [
          "Personal Information",
          "Qualifications/Certificates",
          "Experience Information",
        ];
      case "Shop with Multiple Technicians":
        return ["Technician Information", "Technician Information"];
      case "Multi Sites & Multi Users":
        return ["Business Information", "Location Information", "Users"];
      default:
        return [""];
    }
  })();

  const handleNextStep = (data) => {
    console.log("Before step update:", currentStepUser);

    if (currentStepUser <= steps.length) {
      setCurrentStepUser((prev) => {
        const nextStep = prev + 1;
        console.log("Updating currentStepUser from", prev, "to", nextStep);
        return nextStep;
      });
    } else {
      setStaffData((prev) => [...prev, { application: applicationCount, data }]);
      setApplicationCount((prev) => prev + 1);
      setCurrentStepUser(1); 
      console.log("Completed all steps, resetting currentStepUser to 1.");
    }

    // Show modal after the experience form in application 2
    if (applicationCount === 2) {
      setShowAddAnother(true);
    }
    
    console.log("After step update:", currentStepUser);
  };

  const handleAddMoreStaff = () => {
    setCurrentStepUser(1); 
    setCurrentStaff((prev) => prev + 1);
    setShowAddAnother(false);
  };

  const handleFinalize = () => {
    console.log("Finalized Data:", staffData);
    setShowAddAnother(false);
  };

  return (
    <>
      <div className="flex justify-between pb-3">
        {steps.map((step, index) => (
          <div
            onClick={() => setCurrentStepUser(index + 1)}
            key={index}
            className={`${next === "Shop with Multiple Technicians" && "hidden"} w-1/2 flex flex-col justify-center items-center pb-4 cursor-pointer border-b-2 transition-colors duration-500 
             ${currentStepUser >= index + 1 ? " border-blue-500" : "border-white"}`}
          >
            <div className={`flex justify-center items-center h-10 w-10 rounded-full font-semibold
              ${currentStepUser >= index + 1 ? "bg-blue-500 text-white" : "bg-white text-black"}`}>
              {index + 1}
            </div>
            <p className="font-semibold">{step}</p>
          </div>
        ))}
      </div>

      <div>
        <CurrentStepUsers.Provider value={{ currentStepUser, setCurrentStepUser }}>
          {(next === "Shop with Multiple Technicians" || next === "Multi Sites & Multi Users") && (
            <div className="text-center text-lg font-semibold mb-4">
              Application {applicationCount}, Staff Member {currentStaff}
            </div>
          )}

          {next === "Sole Proprietorship" || next === "Shop with Multiple Technicians" ? (
            <>
              {currentStepUser === 1 && <PersonalForm onNext={handleNextStep} />}
              {currentStepUser === 2 && <Certificaions onNext={handleNextStep} />}
              {currentStepUser === 3 && <Experience onNext={handleNextStep} />}
              {currentStepUser > steps.length && (
                <>
                  {next === "Sole Proprietorship" && (
                    <div className="flex flex-col items-center">
                      <p>Thank You for submitting the Application</p>
                    </div>
                  )}
                  {(currentStepUser > steps.length && next === "Shop with Multiple Technicians" ||
                    next === "Multi Sites & Multi Users") && showAddAnother && (
                      <div className="fixed inset-0 bg-gray-700 bg-opacity-50 flex justify-center items-center z-50">
                        <div className="bg-white p-6 rounded-lg shadow-xl max-w-sm w-full">
                          <p className="text-lg font-semibold mb-4">Do you want to add another application?</p>
                          <div className="flex justify-center gap-4">
                            <button
                              className="bg-blue-500 text-white px-4 py-2 rounded"
                              onClick={handleAddMoreStaff}
                            >
                              Yes
                            </button>
                            <button
                              className="bg-gray-500 text-white px-4 py-2 rounded"
                              onClick={handleFinalize}
                            >
                              No, Finalize
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                </>
              )}
            </>
          ) : (
            <div></div>
          )}
        </CurrentStepUsers.Provider>
      </div>
    </>
  );
};

export default Users;
