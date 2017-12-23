    const isComposite = (product) => {
      for (let d = 2; d <= product; d++) { // line 10, 21 – 24
        // optimization: stop if product is greater than product,
        for (let e = 2; d * e <= product; e++) { // line 11, 17 – 20
          if (d * e === product) { // line 12, 13, 14, 15
            return true; // line 16
          }
        }
      }

      return false; // line 9
    }

    let b = 108400;
    let h = 0;
    for (let num = b; num <= b + 17000; num += 17) { // line 1, 2, 5, 6, 7, 8, 27 – 32
      if (isComposite(num)) { // line 25
        h += 1; // line 26
      }
    }

    console.log(h);
    
