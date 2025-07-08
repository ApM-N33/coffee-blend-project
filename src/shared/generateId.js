///////////////////////////////////////////////////////////////////////////

function generateId(items) {
  const counters = {}

  return items.map((item) => {
    const category = item.category_type.replace(/\s+/g, "_")

    if (!counters[category]) counters[category] = 0

    return {
      ...item,
      id: `${category}-${counters[category]++}`,
    }
  })
}

export default generateId

//////////////////////////////////////////////////////////////////////////////
