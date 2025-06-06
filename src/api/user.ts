import type {
  AvatarUploadRequest,
  AvatarUploadResponse,
  UserDeleteRequest,
  UserDeleteResponse,
  UserEditRequest,
  UserEditResponse,
  UserListRequest,
  UserListResponse,
  UserRequest,
  UserResponse,
} from '@/interface'
import { apiFetchDefault, apiFetchRemind } from '@/utils/ofetch'

export const apiUser = async (request: UserRequest) => {
  return apiFetchDefault<UserResponse>('/user', {
    method: 'POST',
    body: request,
  })
}

export const apiUserEdit = async (request: UserEditRequest) => {
  return apiFetchDefault<UserEditResponse>('/user/edit', {
    method: 'POST',
    body: request,
  })
}

export const apiUserDelete = async (request: UserDeleteRequest) => {
  return apiFetchDefault<UserDeleteResponse>('/user/delete', {
    method: 'POST',
    body: request,
  })
}

export const apiUserAll = async (request: UserListRequest) => {
  return apiFetchDefault<UserListResponse>('/user/all', {
    method: 'POST',
    body: request,
  })
}

export const apiAvatarUpload = async (request: AvatarUploadRequest) => {
  const formData = new FormData()
  formData.append('file', request.file)

  return apiFetchRemind<AvatarUploadResponse>('/avatar/upload', {
    method: 'POST',
    body: formData,
  })
}
