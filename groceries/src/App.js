

const container={ display:'grid',
gridTemplateColumns: '25% 25% 25% 25%',

marginTop: '5%',
marginLeft: '5%',
marginright:'5%',

gridGap:'20px'}


const nav={width:'100%',height:'40px',border:'3px solid black',display:'flex',justifyContent: 'space-around'}




function App() {
  return (
    <div>
     <div style={nav}>Groceries</div>

<div style={container}>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>

<div>
<img source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSe3culDoWBMICFD_7QYMnE2kiKzPdq-Y1yP67mY58d7A&s"}}/>
<p>$ 20.00</p>
<button>add to cart</button>
</div>



</div>
    </div>
  );
}

export default App;
