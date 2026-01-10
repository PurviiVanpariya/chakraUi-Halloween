

import { Box, Input } from "@chakra-ui/react";

type InputProps = {
  className?: string;
  borderRadius?: any;
  height?: any;
  width?: any;
  placeholder?: string;
};

const OutlinedInput: React.FC<InputProps> = ({
  className,
  borderRadius = 0,
  height,
  width,
  placeholder
}) => {
  return (
    <Box>
      <Input
        borderRadius={borderRadius}
        height={height}
        width={width}
        placeholder={placeholder}
        className={`${className} outline-none!`}
        borderColor="white"
        _focus={{
          borderColor: "#f7ea66",
        }}
        _placeholder={{ color: '#CCCCCC' }}
        _focusVisible={{
          _placeholder: {
            color: 'transparent',
          },
        }}
      />
    </Box>
  );
};

export default OutlinedInput;
