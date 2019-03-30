function expecto(a) {
  return {
    toEq: b => {
      const aStr = JSON.stringify(a)
      const bStr = JSON.stringify(b)
      if (aStr !== bStr) {
        throw Error(`Expected ${aStr} to equal ${bStr}`)
      } else {
        console.log(".")
      }
    }
  }
}

async function main() {
  await Promise.all([])
  expecto(5).toEq("3")
}

// main()

expecto("aab").toEq("a" + "b");
// expecto([5]).toEq([5])
