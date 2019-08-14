import React from 'react';
import PropTypes from 'prop-types';

import { Grid, Paper } from '@material-ui/core';

import DreamBody from '../bodies/DreamBodyComponent';
import DreamHead from '../heads/DreamHeadComponent';
import ExplanationHead from '../heads/ExplanationHeadComponent';

import * as sentences from '../../sentences';

class Dream extends React.Component {
  render() {
    var sentenceParams = sentences.getDreamSentenceParams(
            this.props.results, this.props.params);
    var headParams = {
      'LayerID': this.props.params.layer_id,
      'WordID': this.props.params.word_id,
      'NeuronID': this.props.params.neuron_id
    }
    return (
      <Grid container direction='column' className='fullHeight' wrap='nowrap'>
        <ExplanationHead
            topic="Dream"
            params={headParams}
            elementIndex={this.props.elementIndex}/>
        <DreamHead
            results={this.props.results}
            params={this.props.params}
            sentenceParams={sentenceParams}/>
        <div className='overflow'>
          <Paper className={'dreamPaper'}>
            <DreamBody
                results={this.props.results}
                params={this.props.params}
                sentenceParams={sentenceParams}/>
          </Paper>
        </div>
      </Grid>
    );
  }
}

Dream.propTypes = {
  results: PropTypes.object.isRequired,
  params: PropTypes.object.isRequired,
  elementIndex: PropTypes.number.isRequired
}

export default Dream;
