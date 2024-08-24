import ButtonComp, { ButtonProps } from 'react-bootstrap/Button';

const Button: React.FC<ButtonProps> = ({ children, className, ...rest }) => {
  return (
    <ButtonComp {...rest} className={`Btn1 ${className}`}>
      {children}
    </ButtonComp>
  );
};

export default Button;
