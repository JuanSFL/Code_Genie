import CommunityQuestions from "../components/CommunityQuestions"

import { useQuery } from '@apollo/client';
import { QUERY_THOUGHTS } from '../utils/queries';

function AllQuestions() {
    const { loading, data } = useQuery(QUERY_THOUGHTS);
    const thoughts = data?.thoughts || [];
    return (
      <div>
        {loading ? (
              <div class="spinner">
              <div class="spinner1"></div>
            </div>
              ) : (
                <div>
      <h3 className="type-white large top-pad">Community Questions</h3>
        <div className="community-questions">

        <div className="col-12 mb-3">
            <CommunityQuestions
              thoughts={thoughts}
            />
        </div>
        </div>
        </div>
        )}
        </div>
    )
}

export default AllQuestions