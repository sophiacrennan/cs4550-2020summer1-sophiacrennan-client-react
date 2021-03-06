const findAllWidgets = () =>
    fetch(`https://cs4550-scrennan-java-a5.herokuapp.com/api/widgets/`)
        .then(response => response.json())

const findWidgetsForTopic = (tid) =>
    fetch(`https://cs4550-scrennan-java-a5.herokuapp.com/api/topics/${tid}/widgets`)
        .then(response => response.json())

const deleteWidget = (wid) =>
    fetch(`https://cs4550-scrennan-java-a5.herokuapp.com/api/widgets/${wid}`, {
    method: 'DELETE'
    })
        .then(response => response.json())

const createWidget = (tid, widget) =>
    fetch(`https://cs4550-scrennan-java-a5.herokuapp.com/api/topics/${tid}/widgets`, {
        method: 'POST',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const updateWidget = (wid, widget) =>
    fetch(`https://cs4550-scrennan-java-a5.herokuapp.com/api/widgets/${wid}`, {
        method: 'PUT',
        body: JSON.stringify(widget),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export default {
    createWidget,
    deleteWidget,
    updateWidget,
    findWidgetsForTopic
}