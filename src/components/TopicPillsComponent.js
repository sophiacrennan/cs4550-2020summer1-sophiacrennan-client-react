import React from "react";
import {faCheck, faPencilAlt, faPlus, faTimes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Link} from "react-router-dom";

class TopicPillsComponent extends React.Component {

    state = {
        newTopicTitle: 'New Topic',
        editingTopic: {},
        selectedTopic: {}
    }

    componentDidMount() {
        this.props.findTopicForLesson(this.props.params.lessonId)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.params.lessonId !== this.props.params.lessonId) {
            this.props.findTopicForLesson(this.props.params.lessonId)
        }
    }

    render() {
        return (
            <div>
                <ul className="nav nav-pills wbdv-topic-pill-list">
                    {
                        this.props.topics.map(topic =>
                            <li key={topic._id}
                                className="nav-item wbdv-topic-pill">
                                {
                                    this.state.editingTopic._id !== topic._id &&
                                    <span>
                                        <button className={this.state.selectedTopic._id === topic._id ?
                                            'nav-link btn btn-pill active' : 'nav-link btn btn-pill'}>
                                            <Link
                                                to={`/editor/${this.props.params.courseId}/${this.props.params.moduleId}/${this.props.params.lessonId}/topics/${topic._id}`}
                                                className="link"
                                                onClick={() => this.setState({selectedTopic: topic})}>
                                                    {topic.title}
                                            </Link>
                                             <button onClick={() => this.setState({editingTopic: topic, selectedTopic: topic})}
                                                     className="btn btn-pill nav-link wbdv-topic-edit-btn float-right">
                                                <FontAwesomeIcon icon={faPencilAlt}></FontAwesomeIcon>
                                            </button>
                                        </button>
                                    </span>
                                }
                                {
                                    this.state.editingTopic._id === topic._id &&
                                    <span>
                                         <button className={this.state.selectedTopic._id === topic._id ?
                                             'nav-link btn btn-pill active' : 'nav-link btn btn-pill'}>
                                                     <input className="form-control"
                                                            onChange={(e) => {
                                                                const newTitle = e.target.value
                                                                this.setState(prevState => ({
                                                                    editingTopic: {
                                                                        ...prevState.editingTopic,
                                                                        title: newTitle
                                                                    }
                                                                }))
                                                            }}
                                                            value={this.state.editingTopic.title}/>

                                                     <button
                                                         className="btn btn-pill nav-link wbdv-topic-item-save-btn float-right"
                                                         onClick={() => {
                                                             this.props.updateTopic(this.state.editingTopic._id, this.state.editingTopic)
                                                             this.setState({editingTopic: {}})
                                                         }}>
                                                         <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon>
                                                     </button>

                                                    <button onClick={() => this.props.deleteTopic(topic._id)}
                                                            className="btn btn-pill nav-link wbdv-topic-item-delete-btn float-right">
                                                        <FontAwesomeIcon icon={faTimes}></FontAwesomeIcon>
                                                    </button>
                                        </button>
                                            </span>
                                }
                            </li>
                        )
                    }

                </ul>
                <button className="nav-link btn wbdv-topic-add-btn btn-pill float-right"
                        onClick={() => this.props.createTopic(
                            this.props.params.lessonId, {
                                title: this.state.newTopicTitle,
                            })}>
                    <FontAwesomeIcon icon={faPlus}></FontAwesomeIcon>
                </button>
                <br/>
            </div>
        )
    }
}

export default TopicPillsComponent