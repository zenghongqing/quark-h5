import { camelCase } from 'lodash'
/**
 * 根据elname获取组件默认props数据
 * @param elName
 */
export function getComponentProps(elName) {
  let elComponentData
  for (let key in window._qk_register_components_object) {
    if (key.toLowerCase() === camelCase(elName).toLowerCase()) {
      elComponentData = window._qk_register_components_object[key];
      break;
    }
  }
  if (!elComponentData) return {}

  let props = {}
  for (let key in elComponentData.props) {
    props[key] = [Object, Array].includes(elComponentData.props[key].type) ? elComponentData.props[key].default() : elComponentData.props[key].default
  }
  return props;
}