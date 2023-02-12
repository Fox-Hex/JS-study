import axios from 'axios';
import { URL } from 'url';

const extractLinks = (content) => {
    const host = 'http://localhost:8080';
    const linkRx = /href="(.+?)"/ig;
    const results = content.matchAll(linkRx);
    return Array.from(results).map((r) => r[1])
      .map((rawLink) => new URL(rawLink, host).toString())
      .filter(elem => !elem.startsWith('tel') && !elem.startsWith('mailto'))
  };

const getBadLinks = async (url) => {
    const response = await axios.get(url)
    const links = extractLinks(response.data)
    
}

// const url = 'https://privet.hexlet';
const url = 'https://ru.hexlet.io';
const links = await getBadLinks(url)
// console.log(links);
