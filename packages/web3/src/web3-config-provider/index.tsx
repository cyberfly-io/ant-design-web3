import {
  Web3ConfigProvider as AntdWeb3ConfigProvider,
  type Web3ConfigProviderProps,
} from '@ant-design/web3-common';
import { ConfigProvider, version, type ThemeConfig } from 'antd';

import { ComponentToken as ConnectModalComponentToken } from '../connect-modal/style/index';

console.log('antd version', version);

export interface Web3ThemeConfig extends ThemeConfig {
  web3Components?: {
    ConnectModal?: Partial<ConnectModalComponentToken>;
  };
}

const Web3ConfigProvider: React.FC<{ theme?: Web3ThemeConfig } & Web3ConfigProviderProps> = (
  props,
) => {
  const { theme, ...restProps } = props;
  return (
    <ConfigProvider
      theme={{
        ...theme,
        components: {
          ...theme?.components,
          ...theme?.web3Components,
        },
      }}
    >
      <AntdWeb3ConfigProvider {...restProps} />
    </ConfigProvider>
  );
};

export { Web3ConfigProvider };
