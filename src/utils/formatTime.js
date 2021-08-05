export const formatTime = (arg) => {
  if ((!arg) ||typeof(arg) !== 'number' || arg < 0) {
    return null;
  } else {
    let s = Math.floor(arg % 60);
    let m = Math.floor(arg / 60 % 60);
    let h = Math.floor(arg / 3600);

    h = h < 10 ? '0'+ h : h;
    m = m < 10 ? '0'+ m : m;
    s = s < 10 ? '0'+ s : s;

    return `${h}:${m}:${s}`;
  }
};
