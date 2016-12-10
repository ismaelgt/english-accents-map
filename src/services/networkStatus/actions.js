export const NETWORK_STATUS_CHANGE = 'NETWORK_STATUS_CHANGE'

export default function networkStatusChange (online) {
  return {
    type    : NETWORK_STATUS_CHANGE,
    payload : online
  }
}
