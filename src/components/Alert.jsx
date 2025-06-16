// src/components/Alert.jsx
import { useAlertContext } from "../context/AlertContext";

const Alert = () => {
  const { alertData } = useAlertContext();

  if (!alertData.visible) return null;

  return (
    <div className={`alert alert-${alertData.type} position-fixed top-0 start-50 translate-middle-x mt-3`} style={{ zIndex: 9999 }}>
      {alertData.message}
    </div>
  );
};

export default Alert;
