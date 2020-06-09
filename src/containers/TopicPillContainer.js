import TopicService from "../services/TopicService";
import TopComponent from "../components/LessonTabsComponent"
import {connect} from "react-redux";
import TopicPillsComponent from "../components/TopicPillsComponent";

const stateToPropertyMapper = (state) => ({
    topics: state.TopicReducer.topics
})

const dispatchToPropertyMapper = (dispatch) => ({
    createTopic: (lessonId, newTopic) => {
        TopicService.createTopic(lessonId, newTopic)
            .then(actualTopic => dispatch({
                type: 'CREATE_TOPIC',
                newTopic: actualTopic
            }))
    },
    findTopicForLesson: (lessonId) => {
        TopicService.findTopicForLesson(lessonId)
            .then(actualTopics => dispatch({
                type: "FIND_TOPIC_FOR_LESSON",
                actualTopics
            }))
    },
    deleteTopic: (topicId) => {
        TopicService.deleteTopic(topicId)
            .then(status =>  dispatch({
                type: "DELETE_TOPIC",
                topicId: topicId
            }))
    },
    updateTopic: (topicId, newTopicData) => {
        TopicService.updateTopic(topicId, newTopicData)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                updatedTopic: newTopicData
            }))
    },
})

const TopicPillContainer = connect
(stateToPropertyMapper,dispatchToPropertyMapper)
(TopicPillsComponent)

export default TopicPillContainer