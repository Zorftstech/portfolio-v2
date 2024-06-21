interface ServiceLearnMoreProps {
  color: string;
}

export const ServiceLearnMore = ({ color }: ServiceLearnMoreProps) => (
  <svg
    width="16"
    height="6"
    viewBox="0 0 16 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M8 1L15.5 5H8V1Z" fill={color} />
    <path d="M0 5H8M8 5H15.5L8 1V5Z" stroke={color} />
  </svg>
);
