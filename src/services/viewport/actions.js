export const WINDOW_RESIZE = 'WINDOW_RESIZE'
export const LARGE_SCREEN_BREAKPOINT = 480

export default function windowResize (small) {
  return {
    type    : WINDOW_RESIZE,
    payload : small
  }
}
