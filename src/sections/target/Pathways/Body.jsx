import React from 'react';
import { useQuery } from '@apollo/client';

import Description from './Description';
import PathwaysTable from './PathwaysTable';
import SectionItem from '../../../components/Section/SectionItem';

import PATHWAYS_QUERY from './Pathways.gql';

function Body({ definition, id: ensemblId, label: symbol }) {
  const variables = { ensemblId };
  const request = useQuery(PATHWAYS_QUERY, {
    variables,
  });

  return (
    <SectionItem
      definition={definition}
      request={request}
      renderDescription={() => <Description symbol={symbol} />}
      renderBody={({ target }) => {
        return (
          <PathwaysTable
            symbol={target.approvedSymbol}
            pathways={target.pathways}
            query={PATHWAYS_QUERY.loc.source.body}
            variables={variables}
          />
        );
      }}
    />
  );
}

export default Body;
