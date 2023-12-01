export const socialMediaIcon = (type) => {
  switch (type) {
    case 'facebook':
      return 'icon-facebook.svg'
    case 'twitter':
      return 'icon-twitter.svg'
    case 'instagram':
      return 'icon-instagram.svg'
    case 'youtube':
      return 'icon-youtube.svg'
  }
}

export const followingChangesIcon = (status) => {
  if (status >= 0) {
    return 'icon-up.svg'
  } else {
    return 'icon-down.svg'
  }
}

export const barColor = (type) => {
  switch (type) {
    case 'facebook':
      return 'bg-[#268be2]'
    case 'twitter':
      return 'bg-[#2b9ce1]'
    case 'instagram':
      return 'bg-gradient-to-r from-[#f9c367] to-[#d94c92]'
    case 'youtube':
      return 'bg-[#c0042b]'
  }
}

export const followerCountFormat = (number) => {
  const suffixes = ['', 'k', 'M', 'B', 'T'];
  let magnitude = 0;

  while (number >= 10000 && magnitude < suffixes.length - 1) {
    number /= 1000;
    magnitude++;
  }

  const formattedNumber = Number.isInteger(number) ? number : number.toFixed(1);
  return `${formattedNumber}${suffixes[magnitude]}`;
}