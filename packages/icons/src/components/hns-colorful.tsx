// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY
import * as React from 'react';
import AntdIcon from '@ant-design/icons';
import { type IconBaseProps } from '@ant-design/icons/lib/components/Icon';
import { ConfigProvider } from 'antd';
import classnames from 'classnames';

import { eraseDefaultProps } from '../utils';
import SVGComponent from '../svgs/hns-colorful.svg';

/**![HnsColorful](data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDI0LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCIgZmlsbD0iI2NhY2FjYSIgdmVyc2lvbj0iMS4xIiBpZD0iYW50LXdlYjMtaWNvbi1obnMtY29sb3JmdWwtTGF5ZXJfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCAyMDAwIDIwODguOSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMjAwMCAyMDg4Ljk7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KCjxwYXRoIGQ9Ik0xNzI2LjYsNjgxLjRsLTEyOS44LTIzMC42bDI1MS41LDAuMWM2LjcsMCwxNC42LDQuNSwxOC4yLDEwLjVjNCw2LjYsMjQuNCw0MC4zLDQ5LDgwLjcKCWMyOS40LDQ4LjQsNjQuNSwxMDYuMyw4NC42LDEzOS4zSDE3MjYuNnogTTEyNjEuNCwyMDc4Yy02LjEsMTAuOS0xNCwxMC45LTE2LjYsMTAuOWgtMTAyLjhjLTU0LjQsMC0xMTcuMS0wLjEtMTU0LjUtMC4xCglsMzk5LjYtNzE3LjRjMTAuNC0xOC41LDMuNy00Mi0xNC44LTUyLjNjLTUuNy0zLjItMTIuMS00LjktMTguNi00LjlsMCwwbC02ODEsMC45bC0xMzUuNS0yMzQuNWg5OTJjMC4xLDAsMC4yLDAsMC4zLDBzMC4yLDAsMC4zLDAKCWMwLjYsMCwxLjEtMC4yLDEuNi0wLjJjMi4yLTAuMSw0LjQtMC40LDYuNi0wLjljMS42LTAuNCwzLjMtMC45LDQuOC0xLjVjMC44LTAuMywxLjctMC43LDIuNS0xYzcuNy0zLjMsMTQuMS05LjEsMTguMi0xNi41CglMMTcyNyw3NTguMmgyNzBMMTI2MS40LDIwNzh6IE05MjEuMSwyMDUwLjdjLTguNy0xNC4zLTIwLTMyLjktMzIuMy01My4xYy00MS4zLTY4LjItOTQuMi0xNTUuNS0xMDAuMi0xNjUuMQoJYy0yLTMuMi0yLjktMTEuMSwxLjMtMTguN2M5LjYtMTcuMiwxOTAuNC0zNDMsMjM0LjUtNDIyLjRsMjY0LjEtMC4zTDkyMS4xLDIwNTAuN3ogTTQ3MC44LDE2MDEuOGwtMTMxLjMtMjMzLjJsMTMyLjMtMjQ4CglsMTMyLjcsMjI5LjdDNTYzLjMsMTQyOCw0OTguOSwxNTQ5LjEsNDcwLjgsMTYwMS44eiBNMjk0LjYsMTYzOC4xYy02Ni44LDAtMTMzLjMsMC0xNDMsMGwwLDBjLTYuNSwwLTE0LjQtNC42LTE4LTEwLjVsLTQyLjctNzAuNAoJQzYwLjQsMTUwNywyMS41LDE0NDIuOSwwLDE0MDcuNWgyNzMuNGwxMjkuOCwyMzAuNkMzNzQuOSwxNjM4LjEsMzM0LjgsMTYzOC4xLDI5NC42LDE2MzguMUwyOTQuNiwxNjM4LjF6IE03MzguNiwxMQoJYzYuMS0xMSwxNC0xMSwxNi41LTExaDI1OC4zTDYxMi43LDcxNy40Yy0wLjMsMC42LTAuNSwxLjItMC44LDEuOWMtMC42LDEuMi0xLjEsMi40LTEuNiwzLjdjLTAuNCwxLjItMC44LDIuNC0xLjEsMy43CglzLTAuNiwyLjMtMC44LDMuNWMtMC4yLDEuNC0wLjQsMi44LTAuNCw0LjNjMCwwLjYtMC4yLDEuMi0wLjIsMS45YzAsMC41LDAuMSwwLjksMC4yLDEuNGMwLDEuNCwwLjIsMi44LDAuNCw0LjIKCWMwLjEsMS4yLDAuMywyLjMsMC42LDMuNWMwLjMsMS4yLDAuNywyLjQsMS4xLDMuNmMwLjQsMS4yLDAuOCwyLjMsMS4zLDMuNXMxLjEsMi4yLDEuNywzLjJzMS4yLDIuMSwyLDMuMWMwLjcsMSwxLjUsMiwyLjQsMi45CgljMC44LDAuOSwxLjYsMS44LDIuNSwyLjdzMS44LDEuNSwyLjgsMi4zYzEuMSwwLjgsMi4yLDEuNiwzLjMsMi4zYzAuNCwwLjMsMC44LDAuNiwxLjIsMC45czAuOSwwLjMsMS40LDAuNmMyLDEsNC4xLDEuOSw2LjIsMi41CgljMC44LDAuMiwxLjUsMC41LDIuMywwLjdjMi44LDAuNyw1LjcsMS4xLDguNywxLjFjMCwwLDAsMCwwLjEsMGgwLjFoMTdjMC4xLDAsMC4yLDAsMC4yLDBsMCwwbDY2My45LTAuOQoJYzE3LjYsMzAuNSw1MC40LDg4LDc4LjMsMTM2LjljMjEuNCwzNy42LDM5LjIsNjguNiw1My4yLDkzaC05ODhjLTAuNCwwLTAuOCwwLjEtMS4zLDAuMmMtMTMuOSwwLjEtMjYuNiw3LjktMzMuMiwyMC4xbC0xNjMuNiwzMDYuNgoJSDMuMUMxMjAuOCwxMTE5LjMsNzMwLjcsMjUsNzM4LjYsMTF6IE0xMDc5LjQsMzkuMWwyNCwzOS41YzQyLjEsNjkuNSwxMDEuNiwxNjcuNiwxMDcuOSwxNzcuOGMyLDMuMiwyLjksMTEuMS0xLjMsMTguN0w5NzUuNiw2OTcuMwoJbC0yNjQsMC4zTDEwNzkuNCwzOS4xeiBNMTUyOS4xLDQ4Ni45bDEzMS4zLDIzMy4zbC0xMzMuOSwyNDcuNWMtMTYtMjcuOC0zNS44LTYyLjYtNTQuNC05NS4yYy0zNi44LTY0LjQtNjMuNi0xMTEuMy03OC43LTEzNy41CglDMTQyMi4xLDY4Mi44LDE0OTcuNSw1NDQuNSwxNTI5LjEsNDg2Ljl6IiBzdHlsZT0iZmlsbC1ydWxlOiBldmVub2RkOyBjbGlwLXJ1bGU6IGV2ZW5vZGQ7Ii8+Cjwvc3ZnPgo=) */
export const HnsColorful = React.forwardRef<HTMLSpanElement, IconBaseProps>((props, ref) => {
  const { getPrefixCls } = React.useContext(ConfigProvider.ConfigContext);
  const prefixCls = getPrefixCls('web3-icon-hns-colorful');

  return (
    <AntdIcon
      {...props}
      className={classnames(prefixCls, props.className)}
      ref={ref}
      component={eraseDefaultProps(SVGComponent)}
    />
  );
});

HnsColorful.displayName = 'HnsColorful';
