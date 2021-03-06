const initialState = {
    newTopicTitle: 'Some Topic',
    topics: []
}

const TopicReducer = (state = initialState, action) => {
    switch (action.type) {
        case "DELETE_TOPIC":
            return {
                ...state,
                topics: state.topics.filter(
                    topic => topic._id !== action.topicId)
            }
            break;
        case "FIND_TOPIC_FOR_LESSON":
            return {
                ...state,
                topics: action.actualTopics
            }
            break;
        case "CREATE_TOPIC":
            return {
                ...state,
                topics: [...state.topics, action.newTopic]
            }
            break;
        case "UPDATE_TOPIC":
            return {
                ...state,
                topics: state.topics.map(
                    topic => topic._id === action.updatedTopic._id ?
                        action.updatedTopic : topic)
            }
            break;
        default:
            return state
    }
}

export default TopicReducer