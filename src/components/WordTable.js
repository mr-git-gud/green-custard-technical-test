import React from 'react';
import './word-table.css';
import _ from 'underscore';

class WordTable extends React.Component{
  render(){
    const { posts } = this.props;
    let contentString = '';
    _.each(posts, (post, i) => {
      contentString += post.body + " ";
    })
    let arrayOfWords = contentString.split(" ");
    const totalWords = arrayOfWords.length;
    const topWordsUnsorted = {};

    _.each(arrayOfWords, (word, i) => {
      if(!topWordsUnsorted[word]){
        topWordsUnsorted[word] = 1;
      } else if(topWordsUnsorted[word]){
        topWordsUnsorted[word]++;
      }
    })

    const topWordsSorted = Object.keys(topWordsUnsorted).sort((a, b) => { return topWordsUnsorted[b] - topWordsUnsorted[a]  }).map(key => {
      return { word: key,
               percent: parseInt((topWordsUnsorted[key]/totalWords)*100).toFixed(1)
             }
    });
    const top10words = topWordsSorted.splice(0, 10);

    return (
      <div className="col-6 word-table-container">
        <h6>Top 10 words</h6>
        {
          top10words.map((entry, i) => {
            return(
              <div>
                <div className="word" style={{display: 'inline-block', width: '100px'}}>{entry.word}</div>
                <div className="percent" style={{display: 'inline-block', marginLeft: '30px'}}>{entry.percent}%</div>
              </div>
            )
          })
        }
      </div>
    )
  }
}

export default WordTable;
