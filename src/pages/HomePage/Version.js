import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { Box } from '@material-ui/core';
import Link from '../../components/Link';
import { version } from '../../constants';

// HELPERS
function getVersion({ month, year }) {
  return `${year}.${month < 10 ? '0' : ''}${month}`;
}

function getFullMonth({ month, year }) {
  const date = new Date(year + 2000, month - 1);
  return date.toLocaleString('default', { month: 'long' });
}

// QUERY
const DATA_VERSION_QUERY = gql`
  query DataVersion {
    meta {
      dataVersion {
        month
        year
      }
    }
  }
`;

// CONTAINER
function VersionContainer({ children }) {
  return (
    <Box display="flex" mt={5} justifyContent="center" alignContent="center">
      {children}
    </Box>
  );
}

// LINK
function VersionLink() {
  return (
    <Box ml={1}>
      <Link external to={version.changeLogPage}>
        {version.frontend}
      </Link>
    </Box>
  );
}

// MAIN COMPONENT
function Version() {
  const { data, loading, error } = useQuery(DATA_VERSION_QUERY);
  if (error) return null;
  if (loading)
    return <VersionContainer>Loading data version ...</VersionContainer>;
  const {
    meta: {
      dataVersion: { month, year },
    },
  } = data;
  const version = getVersion({ month, year });
  const fullMonth = getFullMonth({ month, year });

  return (
    <VersionContainer>
      Version:
      <VersionLink month={fullMonth} year={year} version={version} />
    </VersionContainer>
  );
}

export default Version;
