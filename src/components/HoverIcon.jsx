/* eslint-disable react/prop-types */
export default function HoverIcon({ Icon, size = 30, hoverColor }) {
  return (
    <Icon size={size} className={`cursor-pointer hover:text-[${hoverColor}]`} />
  );
}
