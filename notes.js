asyncFunc = () => {
    return Promise.resolve(37);
  }

  async componentDidMount(){
    this.setState({
      answer: await this.asyncFunc()
    });
  }


  