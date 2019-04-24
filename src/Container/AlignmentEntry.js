import React from 'react'

const AlphaColor = {
  A: '#5BF13E',
  T: '#388BEE',
  C: '#FFB23E',
  G: '#ED493B'
}

const AlphaColorSwitch = {}

const colours = ['#5BF13E', '#46c12e', '#388BEE', '#2d67ad', '#FFB23E', '#c4872b', '#ED493B', '#bf3c31']

function maskedAllele(sequence, seqAlign) {
  if (seqAlign == "No Repeated Data") {
    //Do nothing
    return (<span style={{ backgroundColor: "green" }}>{sequence}</span>);
  } else {
    let alleles = seqAlign.split(' ');
    let pattern = []
    AlphaColor["A"] = 'test';
    console.log(AlphaColor)
    alleles.map(allele => {
      if (/\d/.test(allele)) {
        let tmp = allele.split(')');
        let tmp1 = tmp[0].split('(');
        let tmp2 = Object.assign({ pattern: tmp1[1], number: tmp[1] })
        // console.log(tmp2)
        pattern.push(tmp2)
      } else if (allele == "") {

      } else {
        let tmp2 = Object.assign({ pattern: allele, number: 1 })
        pattern.push(tmp2)
      }
    })
    // console.log(pattern)
    let k = 0;
    let final = []
    for (var i = 0; i < pattern.length; i++) {
      for (var j = 0; j < pattern[i].number; j++) {
        if (AlphaColor[pattern[i].pattern] == null) {
          AlphaColor[pattern[i].pattern] = colours[k++];
          AlphaColorSwitch[pattern[i].pattern] = colours[k++];
        }
        final.push(pattern[i].pattern)
      }
    }
    console.log(final)
    let pevLetter = "";
    return final.map((letter, i) => (
      <span style={{ backgroundColor: ((i == 0) ? letter : final[i - 1] == letter && i % 2 == 0) ? AlphaColorSwitch[letter] : AlphaColor[letter] }}>{letter}</span>
    ))
  }
}

export default props => (
  <div>
    <div className="columns">
      <div className="column is-1">{props.data.sampleYear}</div>
      <div className="column is-1">{props.data.sampleId}</div>
      <div className="column">
        {maskedAllele(props.data.sequence, props.data.seqAlignment)}
      </div>
      <div className="column is-1">{props.data.readCount}</div>
      <div className="column is-2">{props.data.seqAlignment}</div>
    </div>
  </div>
)
