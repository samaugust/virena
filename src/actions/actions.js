import * as types from '../constants/actionTypes';

export const setTree = treeData => ({
  type: types.SET_TREE,
  payload: treeData
})

export const setParentName = name => ({
  type: types.SET_PARENT_NAME,
  payload: name
})

export const addParent = name => ({
  type: types.ADD_PARENT,
  payload: name
})

export const addChild = (name, type, key, path) => ({
  type: types.ADD_CHILD,
  payload: {
    title: name,
    subtitle: type,
    key,
    path
  }
})

export const deleteComponent = (key, path) => ({
  type: types.DELETE_COMPONENT,
  payload: {
    key,
    path
  }
})

export const loadParentsDropdown = () => ({
  type: types.LOAD_PARENTS_DROPDOWN,
})

export const selectComponent = (name, key, path) => ({
  type: types.SELECT_COMPONENT,
  payload: {
    title: name,
    key,
    path
  }
})

export const selectParent = (parent) => ({
  type: types.SELECT_PARENT,
  payload: parent
})

export const selectType = (navType) => ({
  type: types.SELECT_TYPE,
  payload: navType
})

