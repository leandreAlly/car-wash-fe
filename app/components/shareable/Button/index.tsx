import { Button, ButtonProps } from 'antd';

const GlobalButton = (props: ButtonProps) => {
  const { type = 'primary' } = props;
  return <Button type={type} size="large" className="m-w-[168px]" {...props} />;
};

export default GlobalButton;
