export const fetchNewsIds = async () => {
  const response = await fetch('https://hacker-news.firebaseio.com/v0/newstories.json');
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('error fetchNewsIds');
    return { success: false };
  }
};

export const fetchItem = async (ids) => {
  const response = await fetch(`https://hacker-news.firebaseio.com/v0/item/${ids}.json`);
  if (response.ok) {
    const data = await response.json();
    return data;
  } else {
    console.error('error fetchItem id:', ids);
    return { success: false };
  }
};
