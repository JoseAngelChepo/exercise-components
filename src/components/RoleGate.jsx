import { useServices } from "../data/providers/ServicesProvider";

const RoleGate = (props) => {
  const { allowedRoles, children } = props;
  const { role } = useServices();

  if (!allowedRoles.includes(role)) {
    return null
  }
  return children
}

export default RoleGate;